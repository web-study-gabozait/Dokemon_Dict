import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

const useHomeSearch = () => {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onSubmitKeyword = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/detail/${keyword}`);
    setKeyword("");
  };

  return { keyword, onChangeKeyword, onSubmitKeyword };
};

export default useHomeSearch;
