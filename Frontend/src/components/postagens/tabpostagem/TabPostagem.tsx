import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box, List, ListItem, ListItemText } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1');

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange} className='cor'>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre" value="2" />
                    </Tabs>
                </AppBar>

                {/* Postagens */}
                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                {/* Sobre */}
                <TabPanel value="2">
                    <Box maxWidth="800px" mx="auto" px={2} py={3}>
                        <Typography variant="h5" gutterBottom align="center" className="titulo" style={{ fontWeight: "bold" }}>
                            Quem sou?
                        </Typography>

                        <Typography variant="body1" paragraph align="justify">
                            Me chamo Kevin, tenho 25 anos e sou da Zona Leste de São Paulo. Desde cedo meu hobby sempre esteve
                            ligado a jogos online (principalmente League of Legends) e tecnologia.
                        </Typography>

                        <Typography variant="body1" paragraph align="justify">
                            Minha jornada no League começou em 2014 e foi paixão imediata. A final do CBLOL em 2015 foi um marco
                            para mim. Naquele instante percebi que queria fazer parte do cenário competitivo. Não cheguei a seguir
                            carreira como pro player, mas o jogo foi a porta de entrada para outro universo que mudou minha vida:
                            o mundo dos computadores e do desenvolvimento de software.
                        </Typography>

                        <Typography variant="body1" paragraph align="justify">
                            No League, alcancei conquistas que me marcaram profundamente. Em 2021 e 2022 realizei um dos meus
                            sonhos ao chegar no Desafiante, além de manter contas no Mestre onde me divirto jogando em todas as lanes.

                        </Typography>
                        <img src="https://pbs.twimg.com/media/GPHgPGzW0AANC8u?format=jpg&name=small" alt="" />

                        <Typography variant="h6" gutterBottom style={{ marginTop: "1.5rem" }}>
                            Minha trajetória profissional
                        </Typography>

                        <Typography variant="body1" paragraph align="justify">
                            Iniciei como Analista de Suporte Técnico na Linx, atendendo clientes-chave dos produtos digitais
                            (E-commerce, Omnichannel e Impulse). Minha evolução foi constante: de Júnior II, passando por Pleno I e II,
                            até alcançar o cargo de Analista de Sustentação Sênior Key Account.
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            Nesse período, fui responsável por:
                        </Typography>

                        <List dense>
                            <ListItem>
                                <ListItemText primary="Sustentação e integração entre loja virtual (E-commerce), marketplace, omnichannel e PDV/ERP, através de análise de fluxos e monitoramento com serviços em nuvem, APIs e logs." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Condução de agendas rotineiras com clientes-chave, para apresentação de status e coleta de feedbacks." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Análise da resiliência do produto e sugestões de melhorias." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Plantões de sobreaviso (SOS), cobrindo todos os produtos da Linx Digital." />
                            </ListItem>
                        </List>

                        <Typography variant="body1" paragraph align="justify">
                            Após 4 meses como sênior, surgiu a oportunidade que eu sempre busquei: me tornar desenvolvedor de software.
                            Desde então, estou atuando com foco em backend, utilizando principalmente <b>Java, Javascript, Apache NiFi</b>,
                            além de ferramentas em cloud (<b>AWS, Azure</b>), Grafana para monitoramento e práticas de integração e
                            sustentação de sistemas complexos.
                        </Typography>

                        <Typography variant="body1" paragraph align="justify">
                            Hoje, continuo expandindo minhas habilidades técnicas e me dedicando a crescer como desenvolvedor, sempre
                            com a mesma paixão por desafios que me acompanhou no League of Legends.
                        </Typography>
                    </Box>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;
