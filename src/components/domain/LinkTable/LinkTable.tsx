import React from "react";
import * as S from "./styles";

import LinkTableRow from "./LinkTableRow";
import useAxios, { linkDataType } from "hooks/useAxios";

const LinkTable = () => {
  const linkData: linkDataType[] | null[] = useAxios();

  const linkDataList = linkData.map((data) => (
    <LinkTableRow
      key={data!.key}
      id={data!.key}
      count={data!.count}
      created_at={data!.created_at}
      download_count={data!.download_count}
      expires_at={data!.expires_at}
      files={data!.files}
      sent={data!.sent}
      size={data!.size}
      summary={data!.summary}
      thumbnailUrl={data!.thumbnailUrl}
    />
  ));

  console.log(linkData);
  return (
    <>
      <S.Title>마이 링크</S.Title>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableCell>제목</S.TableCell>
            <S.TableCell>파일개수</S.TableCell>
            <S.TableCell>크기</S.TableCell>
            <S.TableCell>유효기간</S.TableCell>
            <S.TableCell>받은사람</S.TableCell>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>{linkDataList}</S.TableBody>
      </S.Table>
    </>
  );
};

export default LinkTable;
