import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedade) {
  return (
    <Box >
      <img style={{ borderRadius: '8px ' }} src={`https://github.com/${propriedade.githubUser}.png`} />
    </Box>
  )
}


export default function Home() {
  const githubUser = 'clesiomatias';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'rafaballerini',
    'peas',
    'marcobrunodev',
    'felipefialho'
  ]
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser}></ProfileSideBar>
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className='title'>
              Bem Vindo (a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className='profileRelationArea' style={{ gridArea: 'profileRelationArea' }}>
          <ProfileRelationsBoxWrapper >
            <h2 className='smallTitle'>
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              }
              )}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box >
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
