import NewsModel from "../model/news.model.js";

export const create = async (req, res) => {
  try {
    const newsData = new NewsModel(req.body);
    const { title } = newsData;
    const newsExist = await NewsModel.findOne({ title });
    if (newsExist) {
      return res.status(400).json({ message: "New already exists." });
    }
    const savedNew = await newsData.save();
    res.status(200).json(savedNew);
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
};

export const fetch = async (req, res) => {
  try {
    const news = await NewsModel.findOne();
    if (news.length === 0) {
      return res.status(404).json({ message: "No news found." });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const newExist = await NewsModel.findOne({ _id: id });
    if (!newExist) {
      return res.status(404).json({ message: "New not found" });
    }
    const updateNew = await NewsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateNew);
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
};
export const deleteNew = async (req, res) => {
  try {
    const id = req.params.id;
    const newExist = await NewsModel.findOne({ _id: id });
    if (!newExist) {
      return res.status(404).json({ message: "New not found" });
    }
    await NewsModel.findByIdAndDelete(id);
    res.status(200).json({message: "New deleted successfull." })
   
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
};
