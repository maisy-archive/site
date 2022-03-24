interface CreditsUserProps {
    children?: string;
    className?: string;
    username: string;
}

export default ({ children, className, username }: CreditsUserProps) => {
    return (
        <a className="text-accent underline" href={`//github.com/${username}/`}><img className="inline-block align-middle bg-muted rounded-full bg-opacity-25 mr-2" src={`//github.com/${username}.png`} width="50" height="50" />{username}</a>
    );
};