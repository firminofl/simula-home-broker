enum Tesouro {
    ID = 'tesouro',
    NAME = 'Tesouro Direto',
    DESCRIPTION = 'Investido no Tesouro Direto Selic, o dinheiro que você guarda para despesas inesperadas pode render mais do que na poupança. Com liquidez diária, esse título permite resgate em apenas um dia útil e é ideal para sua reserva de emergência.',
    TYPE = 'Renda fixa'
}

enum Coe {
    ID = 'coe',
    NAME = 'Coe',
    DESCRIPTION = 'Ideal para clientes que buscam diversificar seus investimentos com a tranquilidade de ter seu dinheiro protegido, o COE permite ao investidor ter exposição a diferentes classes de ativos, como fundos internacionais, ações de outros países ou locais, índices variados e até mesmo moedas do mundo inteiro.',
    TYPE = 'Renda fixa / Renda variavel',
    TITLE = 'Teste com COE'
}
enum RendaVariavel {
    ID = 'rv',
    NAME = 'Renda Variável',
    DESCRIPTION = 'Além de aperfeiçoar a nossa plataforma digital, ouvimos você e reduzimos nossas taxas e planos de corretagem em até 62%. Não é promoção: agora você conta com novos preços para negociar ações, opções, minicontratos e muito mais.',
    TYPE = 'Renda variável'
}

enum FundosInvestimento {
    ID = 'fi',
    NAME = 'Fundos de Investimento',
    DESCRIPTION = 'Ideal para quem deseja investir a partir de R$ 500,00, com movimentação mínima de R$ 100,00 e o objetivo de obter retornos superiores ao rendimento do CDI.',
    TYPE = 'Renda Fixa/Variável'
}

export {Tesouro, Coe, RendaVariavel, FundosInvestimento}