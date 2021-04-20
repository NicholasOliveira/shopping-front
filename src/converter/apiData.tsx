import { api } from '../services/api';
import { Products } from '../Interfaces/Products';
import { shortName } from '../utils/shortName';
const Converter = () => {
  const result = (async function () {
    try {
      const { data }: any = await api.get<Products>(
        'posts',
      );
      const productsFormatted: Products = data.map(
        ({ id, title }: any) => {
          return {
            id: id,
            name: shortName(title, 30),
            img: {
              url: 'https://via.placeholder.com/150',
              title: title,
            },
          };
        },
      );
      return productsFormatted;
    } catch (error) {
      console.warn(error);
    }
  })();
  return result;
};

export default Converter;
