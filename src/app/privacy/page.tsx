import Link from "next/link";
import { ArrowLeft, Lock, Shield } from "lucide-react";

export const metadata = {
    title: "Política de Privacidade | WA-AKG",
    description: "Política de Privacidade do WA-AKG, gateway de WhatsApp auto-hospedado: sem rastreamento, dados sob seu controle e boas práticas de segurança.",
    openGraph: {
        title: "Política de Privacidade | WA-AKG",
        description: "Política de Privacidade do WA-AKG, gateway de WhatsApp auto-hospedado.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Política de Privacidade | WA-AKG",
        description: "Política de Privacidade do WA-AKG, gateway de WhatsApp auto-hospedado.",
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden py-24 selection:bg-primary/30 selection:text-primary-foreground">
            {/* Ambient background glows */}
            <div className="fixed top-0 right-1/4 translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-emerald-500/5 dark:bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="container max-w-4xl px-4 mx-auto relative z-10">

                <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Voltar ao Início
                </Link>

                <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 dark:shadow-black/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-500/10 rounded-2xl">
                            <Shield className="h-8 w-8 text-blue-500" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Política de Privacidade</h1>
                            <p className="text-muted-foreground mt-2">Vigente desde: {new Date().toLocaleDateString('pt-BR')}</p>
                        </div>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed">

                        <p className="lead text-lg text-muted-foreground mb-8">
                            No WA-AKG, seus dados são seus. Esta Política de Privacidade explica como as informações são tratadas ao usar este gateway de WhatsApp de código aberto e auto-hospedado.
                        </p>

                        <h2 className="flex items-center gap-2 mt-8 text-2xl border-b pb-2">
                            <Lock className="h-6 w-6 text-blue-500" />
                            1. Sem Rastreamento
                        </h2>
                        <p>
                            Como o WA-AKG é <strong>auto-hospedado</strong>, todo o processamento de dados acontece apenas no servidor onde você publica o aplicativo.
                        </p>
                        <ul>
                            <li><strong>Sem telemetria central:</strong> os criadores do WA-AKG não recebem estatísticas nem relatórios de uso das suas conversas no WhatsApp.</li>
                            <li><strong>Dados 100% seus:</strong> contatos, mensagens, agendamentos e respostas automáticas ficam no seu próprio banco de dados. Ninguém além de você tem acesso.</li>
                        </ul>

                        <h2 className="mt-8 text-2xl border-b pb-2">2. Dados Processados no Seu Servidor</h2>
                        <p>
                            Ao publicar o gateway, o aplicativo no seu servidor lida com:
                        </p>
                        <ul>
                            <li><strong>Credenciais de acesso:</strong> as senhas do painel são criptografadas com bcrypt antes de serem salvas no seu banco de dados.</li>
                            <li><strong>Sessões do WhatsApp:</strong> o WA-AKG funciona como uma ponte para o WhatsApp Web. As chaves de sessão necessárias para manter a conexão ficam salvas no seu servidor.</li>
                            <li><strong>Histórico de mensagens:</strong> as mensagens enviadas e recebidas pelo gateway ficam registradas no seu banco de dados para histórico e webhooks.</li>
                        </ul>

                        <h2 className="mt-8 text-2xl border-b pb-2">3. Protegendo Suas Informações</h2>
                        <p>
                            O WA-AKG segue boas práticas de segurança, mas a proteção final dos seus dados depende da sua hospedagem. Recomendamos:
                        </p>
                        <ul>
                            <li>Publicar o aplicativo com <strong>criptografia SSL/TLS</strong> (HTTPS) obrigatória.</li>
                            <li>Proteger o servidor com firewall e acesso SSH por chave.</li>
                            <li>Manter o sistema operacional e o Node.js sempre atualizados.</li>
                        </ul>

                        <h2 className="mt-8 text-2xl border-b pb-2">4. Integrações de Terceiros</h2>
                        <p>
                            O WA-AKG usa a biblioteca <code>@whiskeysockets/baileys</code> para se comunicar direto com os servidores do WhatsApp. Ao usar este gateway, seu servidor abre uma conexão direta com o WhatsApp. O uso do WhatsApp continua sujeito à Política de Privacidade da Meta.
                        </p>

                        <div className="mt-12 p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                            <p className="font-semibold mb-2">Precisa de mais detalhes?</p>
                            <p className="text-sm text-muted-foreground mb-0">Se tiver dúvidas sobre o tratamento de dados ou quiser revisar o código, visite o <Link href="https://github.com/mrifqidaffaaditya/WA-AKG">repositório no GitHub</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
