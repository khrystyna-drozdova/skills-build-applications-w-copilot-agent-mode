from django.core.management.base import BaseCommand
from django.conf import settings
from djongo import connection

# Sample data for users, teams, activities, leaderboard, and workouts
USERS = [
    {"name": "Clark Kent", "email": "superman@dc.com", "team": "dc"},
    {"name": "Bruce Wayne", "email": "batman@dc.com", "team": "dc"},
    {"name": "Diana Prince", "email": "wonderwoman@dc.com", "team": "dc"},
    {"name": "Tony Stark", "email": "ironman@marvel.com", "team": "marvel"},
    {"name": "Steve Rogers", "email": "captainamerica@marvel.com", "team": "marvel"},
    {"name": "Natasha Romanoff", "email": "blackwidow@marvel.com", "team": "marvel"},
]
TEAMS = [
    {"name": "marvel"},
    {"name": "dc"},
]
ACTIVITIES = [
    {"user_email": "superman@dc.com", "activity": "Flight", "duration": 60},
    {"user_email": "ironman@marvel.com", "activity": "Suit Training", "duration": 45},
]
LEADERBOARD = [
    {"team": "marvel", "points": 120},
    {"team": "dc", "points": 110},
]
WORKOUTS = [
    {"name": "Super Strength", "suggested_for": "dc"},
    {"name": "Tech Endurance", "suggested_for": "marvel"},
]

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        db = connection.cursor().db_conn
        db.users.drop()
        db.teams.drop()
        db.activities.drop()
        db.leaderboard.drop()
        db.workouts.drop()
        db.users.insert_many(USERS)
        db.teams.insert_many(TEAMS)
        db.activities.insert_many(ACTIVITIES)
        db.leaderboard.insert_many(LEADERBOARD)
        db.workouts.insert_many(WORKOUTS)
        db.users.create_index([("email", 1)], unique=True)
        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
