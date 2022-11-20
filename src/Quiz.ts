export const Quiz = async (limit: string, category: string) => {
    const response = await fetch(
        `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_QUIZ_API}&limit=${limit}&category=${category}`
    );
    const data = await response.json();
    return data;
};
