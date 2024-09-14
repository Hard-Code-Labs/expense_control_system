export interface NewUser {
  perName: string,
  perLastname: string,
  perMail: string,
  countryId: number,
  perPassword: string,
}

export interface UserLogin {
  perMail: string,
  perPassword: string,
}

export interface UserProfile {
  perName: string,
  perMail: string,
}