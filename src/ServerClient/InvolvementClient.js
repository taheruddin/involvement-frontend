const endPoint = "/involvements";
const headers = {'Content-Type': 'application/json'};

async function getAll() {
  const response = await fetch(endPoint);
  const involvements = response.json();
  console.log(involvements);
  return involvements;
}

async function get(id) {
  const response = await fetch(
    endPoint + "/" + id/*,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }*/
  );
  const involvement = response.json();
  console.log(involvement);
  return involvement;
}

async function post(data) {
  const response = await fetch(
    endPoint,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }
  );
  const involvement = response.json();
  console.log(involvement); // TODO: clean up
  return involvement;
}

async function put(id, data) {
  const response = await fetch(
    endPoint + "/" + id,
    {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data)
    }
  );
  const involvement = response.json();
  console.log(involvement); // TODO: clean up
  return involvement;
}

export {getAll, get, post, put};