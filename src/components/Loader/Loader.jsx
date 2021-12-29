import Spinner from 'react-loader-spinner';
import styled from '@emotion/styled/macro';

const Triangle = styled(Spinner)`
  margin: 0 auto;
`;

export default function Loader() {
  return <Triangle type="Triangle" width={150} height={150} color="#f8f9fa" />;
}
