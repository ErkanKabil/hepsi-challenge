import styled from 'styled-components'

export const breakpoints = {
    tablet: "678px",
    web: "960px",
    wide: "1280px",
};

export const Wrapper = styled.div`
  padding-bottom: 200px;
`

export const BoxWrapper = styled.div`
  max-width: 450px;
  margin: 20px auto;
`

export const Container = styled.div`
    margin-left: auto;
	margin-right: auto;
	max-width: ${breakpoints.tablet};
	padding-left: 15px;
	padding-right: 15px;
	width: 100%;

	@media (min-width: ${breakpoints.web}) {
		max-width: ${breakpoints.web};
	}

	@media (min-width: ${breakpoints.wide}) {
		max-width: ${breakpoints.wide};
	}`
