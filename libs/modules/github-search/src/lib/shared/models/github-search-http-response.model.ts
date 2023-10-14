import { User } from './user.model';

export interface GithubSearchHttpResponse {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
}
