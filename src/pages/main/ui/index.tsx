import { Stack } from "@mui/material";
import { BaseButton, BaseTypography } from "../../../shared/ui";
import { Link } from "react-router-dom";
import pictureMain from "../../../assets/192cc1c0909911efab591690387607a1 1.png";

export const HomePage = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      gap="30px"
      margin={{ xs: "0", sm: "50px 5rem" }}
    >
      <Stack direction="column" gap="15px">
        <BaseTypography>
          Добро пожаловать в P2P-Review – сервис для взаимной помощи и
          профессионального роста!
        </BaseTypography>
        <BaseTypography>
          P2P-Review создан, чтобы упростить обмен знаниями и улучшить навыки
          через встречи формата "один на один". Наш сервис помогает организовать
          онлайн и офлайн встречи для консультаций и ревью кода, документов,
          навыков и других материалов.
        </BaseTypography>
        <BaseTypography>Что мы предлагаем: </BaseTypography>
        <BaseTypography>
          Поиск экспертов: найдите специалиста по нужной области или
          компетенции.
        </BaseTypography>
        <BaseTypography>
          Гибкое планирование: выбирайте удобные временные слоты, созданные
          экспертами.
        </BaseTypography>
        <BaseTypography>
          Встречи и обмен материалами: планируйте встречи, делитесь файлами и
          ссылками, обсуждайте вопросы в чате.
        </BaseTypography>
        <BaseTypography>
          Оценка и отзывы: оценивайте качество консультации и помогайте улучшать
          профили экспертов.
        </BaseTypography>
        <BaseTypography>
          Присоединяйтесь к P2P-Review и развивайтесь вместе с профессиональным
          сообществом!{" "}
        </BaseTypography>
        <Stack
          direction="row"
          justifyContent="center"
          gap="1rem"
          marginTop="30px"
        >
          {/* <Link to="/search">
            <BaseButton text="Найти эксперта" />
          </Link> */}
          <Link to="/calendar">
            <BaseButton text=" Хочу помогать" />
          </Link>
        </Stack>
      </Stack>
      <img
        src={pictureMain}
        alt=""
        style={{ width: "400px", height: "400px" }}
      />
    </Stack>
  );
};
