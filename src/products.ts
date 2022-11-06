export type productType = {
  id: number;
  type: string[];
  title: string;
  description: string;
  price: number;
  stock: number;
};

export const products = [
  {
    id: 1,
    type: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos',
    price: 9.90,
    stock: 5
  },
  {
    id: 2,
    type: ['TRADICIONAL'],
    title: 'Expresso Americano',
    description: 'Expresso diluido, menos intenso que o tradicional',
    price: 9.90,
    stock: 2
  },
  {
    id: 3,
    type: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    stock: 2
  },
  {
    id: 4,
    type: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    stock: 2
  },
  {
    id: 5,
    type: ['TRADICIONAL', 'COM LEITE'],
    title: 'Expresso com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    stock: 2
  },
  {
    id: 6,
    type: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    stock: 2
  },
  {
    id: 7,
    type: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    stock: 2
  },
  {
    id: 8,
    type: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    stock: 2
  },
  {
    id: 9,
    type: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    stock: 2
  },
  {
    id: 10,
    type: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente',
    price: 9.90,
    stock: 2
  },
  {
    id: 11,
    type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    stock: 2
  },
  {
    id: 12,
    type: ['ESPECIAL'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    stock: 2
  },
  {
    id: 13,
    type: ['ESPECIAL'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    stock: 2
  },
  {
    id: 14,
    type: ['ESPECIAL', 'ALCOÓLICO'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uisque irlandês, açucar e chantilly',
    price: 9.90,
    stock: 2
  },
];