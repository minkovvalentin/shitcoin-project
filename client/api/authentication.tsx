import { LoginResponse } from '../interfaces/api';
import { loginEndpoint } from '../routes/user';

async function login(username: string, password: string): Promise<LoginResponse> {
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, password:password })
  };

  let response = await fetch(loginEndpoint, requestOptions);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  return await response.json().then(data => data as LoginResponse);
}

export {
  login
}