import MeetTeamCards from '../components/MeetTeam/MeetTeamCards'

const MeetTeam = () => {
    return (
        <div className="pt-16 pb-16 w-[90%] max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
                Meet Our Team
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 md:w-[26rem] lg:w-[28rem] h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50" />
            </h1>
            <MeetTeamCards />
        </div>
    )
}

export default MeetTeam
