export const getState = state => state.questions;

export const getActiveQuestion = state => getState(state).active;

export const getAllQuestions = state => getState(state).allQuestions;

export const getMatchingQuestions = state => {
  const activeQuestion = getActiveQuestion(state);
  const allQuestions = getAllQuestions(state);

  if (activeQuestion.length < 1) {
    return [];
  }

  const matches = allQuestions
    .filter(question => question.match(new RegExp(activeQuestion)))
    .sort((a, b) => a.levenstein(activeQuestion) - b.levenstein(activeQuestion))
    .slice(0, 5);

  console.log(matches);

  return matches;
};

String.prototype.levenstein = function(string) {
  var a = this,
    b = string + "",
    m = [],
    i,
    j,
    min = Math.min;

  if (!(a && b)) return (b || a).length;

  for (i = 0; i <= b.length; m[i] = [i++]);
  for (j = 0; j <= a.length; m[0][j] = j++);

  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      m[i][j] =
        b.charAt(i - 1) == a.charAt(j - 1)
          ? m[i - 1][j - 1]
          : (m[i][j] = min(
              m[i - 1][j - 1] + 1,
              min(m[i][j - 1] + 1, m[i - 1][j] + 1)
            ));
    }
  }

  return m[b.length][a.length];
};
