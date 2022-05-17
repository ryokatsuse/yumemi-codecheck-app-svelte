import {BASE_API_URL, GET_API_PREF_PATH} from '../../consts/const'


/**
 * 都道府県一覧を取得する
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 * @return {Promise<Reponse>} result
 */
export const getPrefectures = async(API_KEY: string): Promise<Response> => {
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(() => controller.abort(), 4000);

  return await fetch(`${BASE_API_URL}/${GET_API_PREF_PATH}`, {
    headers: { "X-API-KEY": API_KEY },
    signal: signal
  })
}