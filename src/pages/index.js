import React from 'react'
import {
  Heading, Container, Text, Grid, Card, Box, Image, Button, useColorMode,
} from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Layout>
      <SEO title="Home" />
      <Button onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'default'}
      </Button>
      <Container>
        <Heading as="h1">Very Good Fruit Store</Heading>
        <Grid columns={[1, 2, 3]} gap={20}>
          <Card>
            <Heading>Fresh</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta dolor, dolorem dolores ex,
              fuga
              fugit hic itaque iusto maiores nesciunt obcaecati quam ratione repellendus reprehenderit sapiente ut
              voluptatum. Aliquam.
            </Text>
          </Card>
          <Card>
            <Heading>Tasty</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta dolor, dolorem dolores ex,
              fuga
              fugit hic itaque iusto maiores nesciunt obcaecati quam ratione repellendus reprehenderit sapiente ut
              voluptatum. Aliquam.
            </Text>
          </Card>
          <Card>
            <Heading>Organic</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta dolor, dolorem dolores ex,
              fuga
              fugit hic itaque iusto maiores nesciunt obcaecati quam ratione repellendus reprehenderit sapiente ut
              voluptatum. Aliquam.
            </Text>
          </Card>
        </Grid>
        <Grid columns={[1, 2]}>
          <Box>
            <Image src="https://www.fillmurray.com/400/300" style={{ backgroundSize: 'contain' }} />
          </Box>
          <Box>
            <Heading>This store is great</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi atque autem
              consequuntur, culpa deserunt, doloribus ea enim facilis fuga numquam quasi quia recusandae sapiente soluta
              unde velit vitae?
            </Text>
          </Box>
        </Grid>
        <Grid columns={[1, 2]}>
          <Box>
            <Heading>This store is great</Heading>
            <Text variant="text.caps">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci
              animi
              atque autem consequuntur, culpa deserunt, doloribus ea enim facilis fuga numquam quasi quia recusandae
              sapiente soluta unde velit vitae?
            </Text>
          </Box>
          <Box>
            <Image src="https://www.fillmurray.com/400/300" style={{ backgroundSize: 'contain' }} />
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
