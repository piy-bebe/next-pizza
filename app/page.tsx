import { Container, Filters, ProductCard, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14  mt-9">
        <div className="flex gap-[60px]">
          {/* Фильтры */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} /> */}
              <ProductCard
                id={0}
                name="Бургер-пицца"
                price={550}
                imageUrl={'https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif'}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
