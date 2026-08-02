export interface Player {
  id: string;
  fullname: string;
  contact_no: string;
  whatsapp_no:string;
  location: string;
  player_role: string;
  batting_style: string;
  bowling_style: string;
  profile_image: string;
  bid_amount : number
  jersey_name : string;
  jersey_no : string;
  jersey_size : string;
  status : number;
  payment_screenshot : string;
}

export const playerRoles = [
  "Batsman",
  "Bowler",
  "All-Rounder",
  "Wicket-Keeper",
  "WK-Batsman"
] as const;

export const battingStyles = [
  "Right Hand",
  "Left Hand",
  "None"
] as const;

export const bowlingStyles = [
  "Right Hand",
  "Left Hand",
  "None"
] as const;

export const sizeList = [
  "XXL",
  "XL",
  "L",
  "M",
  "S",
  "XS"
]as const;
