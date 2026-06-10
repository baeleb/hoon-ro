export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  url: string;
}

const projects: Project[] = [
  {
    title: 'SquadNav',
    description:
      'Group caravan navigation app for iOS 17+. Real-time location sharing, synchronized turn-by-turn routing, live alerts, group chat, and file sharing — all with CarPlay support. Backed by Firebase.',
    tags: ['SwiftUI', 'CarPlay', 'Firebase', 'MapKit'],
    icon: '\uD83E\uDDED',
    url: 'https://github.com/baeleb/squadnav-ios',
  },
  {
    title: 'Seats MCP',
    description:
      'MCP server for the seats.aero Partner API. Lets coding agents search award flight availability across 20+ airline mileage programs. Built to give AI assistants direct access to live travel data.',
    tags: ['Go', 'MCP', 'REST APIs'],
    icon: '\u2708\uFE0F',
    url: 'https://github.com/baeleb/seats-MCP',
  },
];

export default projects;
