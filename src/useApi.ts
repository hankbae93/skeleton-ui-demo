import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { CardProps } from "./components/Card";

const GET_PHOTO = "GET_PHOTO";

const getPhotos = async ({
	_page = 1,
	_limit = 12,
}: {
	_page: number;
	_limit?: number;
}): Promise<{ data: CardProps[]; total: number }> => {
	const url = "http://localhost:8000/data";
	const option = {
		params: {
			_page,
			_limit,
		},
	};

	const { data, headers } = await axios.get(url, option);

	return {
		data,
		total: Number(headers["x-total-count"]),
	};
};

const useApi = () => {
	return useInfiniteQuery(
		GET_PHOTO,
		({ pageParam: page = 1 }) => getPhotos({ _page: page }),
		{
			keepPreviousData: true,
			getNextPageParam: (lastPage, allPage) => {
				const { total } = lastPage;
				const isLastPage = Math.ceil(total / 12) === allPage.length;
				return isLastPage ? undefined : allPage.length + 1;
			},
		}
	);
};

export default useApi;
