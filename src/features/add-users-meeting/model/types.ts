export interface Team {
  teamid: number;
  team_name: string;
  description: string;
  teamtype: string;
  createddate: string;
}

export interface UserTeamResponse {
  userprofileid: number;
  firstname: string;
  lastname: string;
  position: string;
  description: string;
  contactinformation: string;
  privacysettings: string;
}
