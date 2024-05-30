import { useQuery } from '@tanstack/react-query';
import * as constant from '../constants/endPoint';
export const fetchArticles = async () => {
  const endPoint = constant.default.endPoint;
  const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-05-04&to=2024-05-04&sortBy=popularity&apiKey=${endPoint}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useArticles = () => {
  return useQuery({ queryKey: ['news'], queryFn: fetchArticles });
};