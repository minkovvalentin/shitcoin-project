import { ServerResponse} from '../interfaces/api';
import { userEndpoint } from '../routes/user';

async function makeUser(username:string ,password: string, email: string): Promise<ServerResponse> {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password:password, email: email })
};

  let response = await fetch(userEndpoint, requestOptions);
  if (!response.ok) {
    throw new Error(response.statusText);
  }


  return await response.json().then(data => data as ServerResponse);
}

export {
  makeUser
}