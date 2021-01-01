import styled from 'styled-components';
import Button from '@components/Button';
import { TextField } from '@material-ui/core';
import WideContainer from '@components/WideContainer';
import Container from '@components/Container';

function CredentialsBox({ className, status, onClick, credentials }) {
  const { clientId, clientSecret, apiKey } = credentials;
  const STATUSES = {
    noApiKey: 'NO_API_KEY',
    existingApiKey: 'EXISTING_API_KEY',
    newApiKey: 'NEW_API_KEY',
  }

  const renderInformation = (status) => {
    const statusIsValid = Object.values(STATUSES).includes(status)
    if (!statusIsValid) throw new Error('Invalid Status supplied')
    switch (true) {
      case status === STATUSES['noApiKey']:
        return (
          <>
            <h2>You don't have an API key</h2>
            <Button
              text={'Create API Key'}
              isInternal={true}
              apiCall={true}
              onClick={onClick}
            />
          </>
        )
      case status === STATUSES['newApiKey']:
        return (
          <>
            <TextField
              id="filled-basic"
              disabled
              value={clientId}
              style={{ width: 300 }}
              label="Client ID"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={clientSecret}
              style={{ width: 300 }}
              label="Client secret"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={apiKey}
              style={{ width: 300 }}
              label="API key"
            />
            <div>
              <p>
                Your client secret & API key will not be displayed again. Please make note of it!
              </p>
              <Button
                text={"I've made note of it"}
                isInternal={true}
                apiCall={true}
                onClick={onClick}
              />
            </div>
          </>
        )
      case status === STATUSES['existingApiKey']:
        return (
          <>
            <TextField
              id="filled-basic"
              disabled
              value={clientId}
              style={{ width: 300 }}
              label="Client ID"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={'Hidden'}
              style={{ width: 300 }}
              label="Client password"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={'Hidden'}
              style={{ width: 300 }}
              label="API key"
            />
            <div>
              <p>
                Note: If you’ve lost either your client secret, or API key, you will need to generate a new API key
              </p>
            </div>
          </>
        )
      default:
        return (
          <>
            <h2>Something went wrong.</h2>
          </>
        )
    }
  }

  return (
    <WideContainer>
      <Container>
        <div className={className}>
          {renderInformation(status)}
        </div>
      </Container>
    </WideContainer>

  )
}

export default styled(CredentialsBox)`

`;