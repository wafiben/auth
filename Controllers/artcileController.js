const getArticle = async (req, res) => {
   res.status(200).json({msg:"from dtabase"})
  };
  const postArticle = async (req, res) => {
    console.log("add Article");
  };
  const putArticle = async (req, res) => {
    console.log("put Article");
  };
  const deleteArticle = async (req, res) => {
    console.log("delete Article");
  };
  module.exports = { getArticle, postArticle, putArticle, deleteArticle };