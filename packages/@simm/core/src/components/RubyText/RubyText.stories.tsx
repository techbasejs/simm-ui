import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text";
import { RubyText } from "./RubyText";
import { RubyTextProvider } from "./Ruby.context";
import { Title } from "../Title";

export default {
  component: RubyText,
  title: "Typography/RubyText",
  tags: ["core"],
};

export function Default() {
  const [showDescription, setShowDescription] = useState(true);
  const [preventCopy, setPreventCopy] = useState(false);

  const handleToggleDescription = () => setShowDescription(!showDescription);
  const handleTogglePreventCopy = () => setPreventCopy(!preventCopy);

  const rubyString =
    "[物](もの)の[値段](ねだん)が[上](あ)がっているため、[多](おお)くの[人](ひと)がお[金](かね)をあまり[使](つか)いたくないと[考](え)えています";
  return (
    <RubyTextProvider
      value={{
        showDescription,
        toggleDescription: () => handleToggleDescription,
        preventCopy,
      }}
    >
      <Stack spacing={10}>
        <Stack mt={12} spacing={12}>
          <Checkbox
            checked={showDescription}
            label="Show furigana"
            onChange={handleToggleDescription}
          />
          <Checkbox
            checked={preventCopy}
            label="Prevent copy"
            onChange={handleTogglePreventCopy}
          />
        </Stack>
        <Title>Basic usage</Title>
        <RubyText kanji="明日" furigana="Ashita" />
        <Title>Verical</Title>
        <RubyText kanji="明日" furigana="Ashita" isVertical />
        <Title>Ruby position</Title>
        <RubyText position="over" kanji="超電磁砲" furigana="レールガン" />
        <RubyText position="under" kanji="超電磁砲" furigana="レールガン" />
        <RubyText position="inter-character" kanji="超" furigana="レールガン" />
        <Title>Custom style using CSS</Title>
        <RubyText
          kanji="州魚類野生生物保護委員会"
          furigana="しゅうぎょるいやせいせいぶつほごいいんかい"
          kanjiProps={{
            color: "#ff0000",
          }}
          furiganaProps={{
            color: "#0f3cd9",
            fontWeight: "bold",
          }}
        />
        <Title>Raw JSX Children</Title>
        <RubyText>
          漢<rp>(</rp>
          <rt>Kan</rt>
          <rp>)</rp>字<rp>(</rp>
          <rt>ji</rt>
          <rp>)</rp>
        </RubyText>
        <Title>Sentence</Title>
        <p>
          <RubyText kanji="逃亡" furigana="とうぼう" />
          <RubyText kanji="続" furigana="つづ" />
          <span>けたフィリピン</span>
          <RubyText kanji="人牧師" furigana="じんぼくし" />
          <span>を</span>
          <RubyText kanji="逮捕" furigana="たいほ" />
          <span>、</span>
          <RubyText kanji="性的虐待" furigana="せいてきぎゃくたい" />
          <span>や</span>
          <RubyText kanji="人身売買容疑" furigana="じんしんばいばいようぎ" />
          <span>でＦＢＩなどが</span>
          <RubyText kanji="指名手配" furigana="しめいてはい" />
        </p>
        <Title>Auto format with syntax [Kanji](Furigana)</Title>
        Input: <Text>{rubyString}</Text>
        Output: <RubyText formatString={rubyString} />
      </Stack>
    </RubyTextProvider>
  );
}
