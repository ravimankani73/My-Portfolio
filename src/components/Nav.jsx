import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import styled from 'styled-components';

const Img = styled.img`
  height  : 65px;
`;

const Section = styled.div`
scroll-snap-align: center;
@media only screen and (max-width: 768px) {
  height: 200vh;
}
`;

const Li = styled.li`
  list-style : none;
  cursor : pointer;
`;

export default function Nav({OnSkillsClick, onContactClick}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Section>
      <Box bg={useColorModeValue('gray.600', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'../MyImage.jpg'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <HStack spacing={8} alignItems={'center'}>
            <Box><Img src='https://xtratheme.com/logo-portfolio/wp-content/uploads/sites/10/2017/06/p1-2-1.jpg' /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Li onClick={OnSkillsClick}>
                  About
                </Li  >
                <Li  >
                  Projects
                </Li>
                <Li onClick={onContactClick} >
                  Contact
                </Li>
            </HStack>
          </HStack>

          <ColorModeSwitcher/>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </Section>
  );
}