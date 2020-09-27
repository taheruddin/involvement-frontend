const endPoint = "/sectors";
const rootId = 1;

async function getTree() {
  const response = await fetch(endPoint + "/" + rootId);
  const rootSector = response.json();
  return rootSector;
}

export {getTree};