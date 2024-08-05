import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "test",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
