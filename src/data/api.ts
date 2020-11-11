import axios from 'axios';
import formatData from './formatData';
import { NameInfo } from '../components/content/state/types';

export default async function getNameInfoApi(): Promise<NameInfo> {
  const input = document.getElementById('search-input').value;
  const agify = await axios.get(`https://api.agify.io?name=${input}`);
  const nationalize = await axios.get(
    `https://api.nationalize.io?name=${input}`
  );
  const genderize = await axios.get(`https://api.genderize.io?name=${input}`);

  return formatData(agify.data, nationalize.data, genderize.data);
}
