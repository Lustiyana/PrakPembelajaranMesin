async function checkIfExist({ url, keyword }) {
  return await strapi.db.query(url).findOne({ where: keyword });
}

async function insertData({ url, body }) {
  return await strapi.db.query(url).create({ data: body });
}

async function updateData({ url, body, keyword }) {
  return await strapi.db.query(url).update({ where: keyword, data: body });
}

async function updateOrCreate({ url, body, keyword }) {
  const result = (await checkIfExist({ url, keyword }))
    ? await updateData({ url, body, keyword })
    : await insertData({ url, body });
  return result;
}

module.exports = {
  checkIfExist,
  updateOrCreate,
};
