// @flow

export type UserData = {
  pk: number,
  name: string,
  roll: number,
  username: string,
  batch: string,
  program: string,
  department: string,
  github: string,
  linkedin: string,
  mastercv: string,
  resume1: string,
  resume2: string,
 
};

export type InternData = {
  pk: number,
  intern_name: string,
  company: string,
  role: string,
  description: string,
  deadline: string,
};
export type PlacementData = {
  key: number,
  placement_name: string,
  company: string,
  role: string,
  description: string,
  deadline: string, 
};

// export type Post = {
//   pk: number,
//   post_text: string,
//   post_title: string,
//   pub_date: string,
//   last_modified: string,
//   author: UserData,
//   stream: number,
// };

// export type Comment = {
//   pk: number,
//   post: any,
//   content: string,
//   created_at: string,
//   user: UserData,
//   replies: Array<Comment>,
// };
