import { createContext, useContext } from "react";
export const QuestionContext = createContext({
  questions: [],
  addQuestion: (question) => {},
  deleteQuestion: (id) => {},

  updateQuestion: (id, question) => {},
});
export const useQuestion = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = QuestionContext.Provider;
