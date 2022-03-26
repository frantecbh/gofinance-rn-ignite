import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import {

    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList

} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string
}


export function Dashboard() {
    const data: DataListProps[] = [{
        id: '1',
        type: 'positive',
        title: 'Desenvolvimento Site',
        amount: 'R$ 11.900,00',
        category: { name: 'Vendas', icon: 'dollar-sign' },
        date: "18/03/1980"
    },
    {
        id: '2',
        type: 'negative',
        title: 'Hamburger Tonho',
        amount: 'R$ 49,90',
        category: { name: 'Alimentação', icon: 'coffee' },
        date: "25/02/1981"
    },
    {
        id: '3',
        type: 'negative',
        title: 'Aluguel apartamento',
        amount: 'R$ 1.200,00',
        category: { name: 'Casa', icon: 'shopping-bag' },
        date: "25/12/1990"
    }]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/60010539?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Francisco</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>

            </Header>

            <HighlightCards
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingHorizontal: 24 }}
            >
                <HighlightCard type='up' title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril' />
                <HighlightCard type='down' title='Saidas' amount='R$ -1.200,00' lastTransaction='Última entrada dia 13 de abril' />
                <HighlightCard type='total' title='Total' amount='R$ 16.200,00' lastTransaction='Última entrada dia 13 de abril' />

            </HighlightCards>


            <Transactions>
                <Title>
                    Listagem
                </Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />

            </Transactions>
        </Container>
    )
}

