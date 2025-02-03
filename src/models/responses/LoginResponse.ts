import type UserResponse from './UserResponse'

export default interface LoginResponse {
  token: string
  user: UserResponse
}
