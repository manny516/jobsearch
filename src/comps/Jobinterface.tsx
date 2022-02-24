export interface Jobinfo{
  id : number,
  company : string,
  position : string,
  location : string,
  view_count : number,
  time_posted : string,
  applied_count : number,
  bookmark : boolean,
  team_type: string,
  salary: string,
  min_qual : Array<string>,
  prefer_qual : Array<string>,
  description : string 
}



export interface JobsCheck{

  company : {
    id : number,
    name : string
  },
  title : string,
  locationNames : string,
  postedAt : string,
  description : string,
  applyUrl : string
}