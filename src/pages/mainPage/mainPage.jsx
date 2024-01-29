import { VsxIcon } from "react-iconsax-vite";
import { MainButton, FatButton, IconBox } from "./mainPage.styled";
import { Box, Container } from "@mui/material";
import { SectionHeader } from "../../components/mainPage/SectionHeader";
import { ProductCard } from "../../components/mainPage/ProductCard";

export const MainPage = () => {
  return (
    <Container>
      <main>
        <FatButton>
          <VsxIcon
            iconName="ShoppingCart"
            type="bold"
            size="24"
            color="#1C1F21"
          />
          У кошику 2 товари на суму 99 ₴
          <IconBox>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967L14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303L10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303C9.17678 16.2374 9.17678 15.7626 9.46967 15.4697L12.9393 12L9.46967 8.53033C9.17678 8.23744 9.17678 7.76256 9.46967 7.46967Z"
                fill="#1C1F21"
              />
            </svg>
          </IconBox>
        </FatButton>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            marginBottom: "32px",
          }}
        >
          <MainButton>
            <VsxIcon
              iconName="Category2"
              type="outline"
              size="24"
              color="#7BBF14"
            />
            Каталог товарів
          </MainButton>
          <MainButton>
            <VsxIcon
              iconName="BagTimer"
              type="outline"
              size="24"
              color="#545D89"
            />
            Історія замовлень
          </MainButton>
          <MainButton>
            <VsxIcon
              iconName="Heart"
              type="outline"
              size="24"
              color="#E42027"
            />
            Мої улюблені
          </MainButton>
          <MainButton>
            <VsxIcon
              iconName="Note1"
              type="outline"
              size="24"
              color="#EE930A"
            />
            Мої списки
          </MainButton>
        </Box>
        <section>
          <SectionHeader sectionTitle="Останні переглянуті" />
          <ProductCard />
        </section>
        <section>
          <SectionHeader sectionTitle="Акційні пропозиції" />
          <ProductCard />
        </section>
        <section>
          <SectionHeader sectionTitle="Популярне" />
          <ProductCard />
        </section>
        <section>
          <SectionHeader sectionTitle="Новинки" />
          <ProductCard />
        </section>
      </main>
    </Container>
  );
};

<VsxIcon iconName="BagTimer" type="outline" size="24" color="#545D89" />;
