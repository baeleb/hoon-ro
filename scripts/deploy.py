#!/usr/bin/env python3
"""Deploy dist/ to Netim hosting via FTP.

Credentials are read from environment variables:
  NETIM_FTP_USER
  NETIM_FTP_PASS
"""

import ftplib
import os
import sys
from pathlib import Path

HOST = os.environ.get("NETIM_FTP_HOST", "ftp.netim.hosting")
PORT = int(os.environ.get("NETIM_FTP_PORT", "21"))
USER = os.environ["NETIM_FTP_USER"]
PASS = os.environ["NETIM_FTP_PASS"]
REMOTE_ROOT = os.environ.get("NETIM_FTP_ROOT", "/public_www")
LOCAL_DIR = Path(__file__).resolve().parent.parent / "dist"


def upload_dir(ftp: ftplib.FTP, local: Path, remote: str) -> None:
    try:
        ftp.cwd(remote)
    except ftplib.error_perm:
        ftp.mkd(remote)
        ftp.cwd(remote)

    for entry in sorted(local.iterdir()):
        remote_path = f"{remote}/{entry.name}"
        if entry.is_dir():
            upload_dir(ftp, entry, remote_path)
        else:
            print(f"  {entry.relative_to(LOCAL_DIR)}", end=" ")
            sys.stdout.flush()
            with open(entry, "rb") as f:
                ftp.storbinary(f"STOR {entry.name}", f)
            print("done")


def main() -> None:
    if not LOCAL_DIR.is_dir():
        print(f"Error: {LOCAL_DIR} not found. Run `npm run build` first.")
        sys.exit(1)

    print(f"Connecting to {HOST}:{PORT} ...")
    ftp = ftplib.FTP_TLS()
    ftp.connect(HOST, PORT)
    ftp.login(USER, PASS)
    ftp.prot_p()
    print(f"Connected. Uploading {LOCAL_DIR} -> {REMOTE_ROOT}/ ...\n")

    upload_dir(ftp, LOCAL_DIR, REMOTE_ROOT)

    print(f"\nDone.")
    ftp.quit()


if __name__ == "__main__":
    main()
