import { Description, Subtitle, Text } from '@/styles/GlobalStyle';
import { EducationList, EducationListDetail, EducationSection } from './Education.styled';
import { theme } from '@/styles/theme';

const Education = () => {
  return (
    <EducationSection>
      <Subtitle fontWeight={theme.fontWeight.light}>Educación y estudios</Subtitle>
      <EducationList>
        <EducationListDetail>
          <Description>2020-2022: </Description>
          <Text>
            CFGS Técnico Superior en Desarrollo de Aplicaciones Multiplataforma. En el CEV - Escuela
            Superior de Comunicación, Imagen y Sonido de Madrid.
          </Text>
        </EducationListDetail>

        <EducationListDetail>
          <Description>2019-2020: </Description>
          <Text>
            CFGS Técnico Superior en Desarrollo de Aplicaciones Web. En el instituto IES Virgen del
            Carmen, Jaén.
          </Text>
        </EducationListDetail>

        <EducationListDetail>
          <Description>2016-2018: </Description>
          <Text>
            CFGS Técnico Superior en Administración de Sistemas Informáticos en Red. En el instituto
            IES Los Cerros, Úbeda.
          </Text>
        </EducationListDetail>

        <EducationListDetail>
          <Description>2012-2014: </Description>
          <Text>Bachillerato científico-tecnológico. En el instituo IES Los Cerros, Úbeda</Text>
        </EducationListDetail>
      </EducationList>
    </EducationSection>
  );
};

export default Education;
