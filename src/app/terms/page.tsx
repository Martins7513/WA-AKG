import Link from "next/link";
import { ArrowLeft, ShieldCheck, Scale } from "lucide-react";

export const metadata = {
    title: "Termos de Uso | WA-AKG",
    description: "Termos de Uso do WA-AKG, gateway de WhatsApp auto-hospedado: regras de uso, segurança e uso aceitável.",
    openGraph: {
        title: "Termos de Uso | WA-AKG",
        description: "Termos de Uso do WA-AKG, gateway de WhatsApp auto-hospedado.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Termos de Uso | WA-AKG",
        description: "Termos de Uso do WA-AKG, gateway de WhatsApp auto-hospedado.",
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden py-24 selection:bg-primary/30 selection:text-primary-foreground">
            {/* Ambient background glows */}
            <div className="fixed top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="container max-w-4xl px-4 mx-auto relative z-10">

                <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Voltar ao Início
                </Link>

                <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 dark:shadow-black/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/10 rounded-2xl">
                            <Scale className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Termos de Uso</h1>
                            <p className="text-muted-foreground mt-2">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                        </div>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed">

                        <p className="lead text-lg text-muted-foreground mb-8">
                            Bem-vindo ao WA-AKG. Ao acessar ou usar esta plataforma de gateway de WhatsApp, você concorda com estes Termos. Se não concordar, não use o serviço.
                        </p>

                        <h2 className="flex items-center gap-2 mt-8 text-2xl border-b pb-2">
                            <ShieldCheck className="h-6 w-6 text-emerald-500" />
                            1. Segurança dos Dados e Responsabilidade
                        </h2>
                        <p>
                            A segurança é a base do serviço. Por ser auto-hospedado, o WA-AKG mantém seus dados apenas na sua própria infraestrutura.
                        </p>
                        <ul>
                            <li><strong>Seus dados são seus:</strong> não rastreamos, interceptamos nem vendemos suas mensagens, contatos ou dados de sessão.</li>
                            <li><strong>Uso seguro:</strong> você é responsável por manter seu servidor e seus equipamentos protegidos.</li>
                            <li><strong>Acesso:</strong> proteja suas credenciais e não compartilhe seu login com pessoas não autorizadas.</li>
                        </ul>

                        <h2 className="mt-8 text-2xl border-b pb-2">2. Uso Aceitável</h2>
                        <p>
                            Ao usar a API, as respostas automáticas e os disparos do WA-AKG, você concorda em seguir os Termos de Serviço oficiais e as regras antispam do WhatsApp. Você concorda em não:
                        </p>
                        <ul>
                            <li>Enviar spam ou campanhas em massa para pessoas que não autorizaram receber mensagens.</li>
                            <li>Usar a plataforma para espalhar vírus, links de golpe ou conteúdo ilegal.</li>
                            <li>Tentar fazer engenharia reversa da API ou sobrecarregar o serviço com requisições em excesso.</li>
                        </ul>

                        <h2 className="mt-8 text-2xl border-b pb-2">3. Proteção da Conta</h2>
                        <p>
                            O WA-AKG permite gerenciar várias sessões de WhatsApp, por isso acompanhe seus aparelhos conectados. Se suspeitar de acesso indevido ao painel, troque sua senha na hora e desconecte as sessões do WhatsApp pelo seu celular.
                        </p>

                        <h2 className="mt-8 text-2xl border-b pb-2">4. Isenções e Limitações</h2>
                        <p>
                            O WA-AKG é fornecido "como está", sem garantias de qualquer tipo. Ele usa bibliotecas de terceiros (como a Baileys) para se conectar ao WhatsApp Web. Mudanças nos sistemas do WhatsApp podem interromper o serviço de vez em quando. Não nos responsabilizamos por suspensões ou banimentos de contas aplicados pelo WhatsApp em razão do seu uso.
                        </p>

                        <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="font-semibold mb-2">Dúvidas sobre estes termos?</p>
                            <p className="text-sm text-muted-foreground mb-0">Consulte a <Link href="/docs">Documentação</Link> ou fale com os mantenedores do projeto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
