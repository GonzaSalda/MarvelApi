import React from "react";
import { useMarvelContext } from "../../context/MarvelContext";
import CharacterCard from "../CharacterCard/CharacterCard";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import SearchCharacter from "../SearchCharacter/SearchCharacter";

const CharacterList = () => {
  const { allCharactersList } = useMarvelContext();

  return (
    <>
      <div className="flex flex-col items-center gap-y-5">
        <SearchCharacter />
        <div className=" flex gap-5 justify-center items-center flex-wrap">
          {allCharactersList.map((item) => (
            <CharacterCard key={item.id} item={item} />
          ))}
        </div>
        <LoadMoreButton />

      </div>
    </>
  );
};

export default CharacterList;
