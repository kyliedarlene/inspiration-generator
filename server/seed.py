#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import *

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        # delete db data
        Character.query.delete()
        print("db data deleted")

        ### characters ###

        new_chars = [
            Character(
                race_name = "Drow",
                cls_name = "Ranger",
                arch_name = "Snake Speaker",
                arch_desc = "Like the serpents they adore, snake speakers are highly adaptable hunters. Snakes are common throughout the world, and people who need to travel through snake-filled jungles often retain a snake speaker guide, trusting the guide to protect them from scaly poisoners.",
                bkd_name = "Trader",
                bkd_desc = "You served your apprenticeship among merchants and traders. You've traveled dusty miles and haggled under distant skies. Why are you living a life of adventure? Are you working off your debt to the company store? Are you escorting a caravan through dangerous wilds? Are you raising capital to start your own business, or trying to restore the fortunes of a ruined trading family? Or are you a smuggler, following secret trade routes unknown to the authorities?",
            ),
            Character(
                race_name = "Half-Orc",
                cls_name = "Fighter",
                arch_name = "Champion",
                arch_desc = "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
                bkd_name = "Court Servant",
                bkd_desc = "Even though you are independent now, you were once a servant to a merchant, noble, regent, or other person of high station. You are an expert in complex social dynamics and knowledgeable in the history and customs of courtly life. Work with your GM to determine whom you served and why you are no longer a servant: did your master or masters retire and no longer require servants, did you resign from the service of a harsh master, did the court you served fall to a neighboring empire, or did something else happen?",
            ),
            Character(
                race_name = "Satarre",
                cls_name = "Monk",
                arch_name = "Way of the Wildcat",
                arch_desc = "Monks of the Wildcat train relentlessly to incorporate speed, acrobatics, and precision strikes to exert control over the field of battle and foes alike. They learn techniques that emulate the grace and agility of felines, including reflexively avoiding blows and bounding between opponents with ease. Embodying the Way of the Wildcat requires intense devotion, endless practice, and no small amount of daring.",
                bkd_name = "Gambler",
                bkd_desc = "You haven't met your match at dice or cards. A career of high stakes and daring escapades has taught you when to play close to the chest and when to risk it all—but you haven't yet learned when to walk away. Are you a brilliant student of the game, a charming master of the bluff and counterbluff, or a cheater with fast hands? What turned you to a life of adventure: a string of bad luck, or an insatiable thirst for risk?",
            ),
            Character(
                race_name = "Erina",
                cls_name = "Sorcerer",
                arch_name = "Hungering",
                arch_desc = "Your innate magic comes from a deep, primal source of hunger and craving. Perhaps your line was cursed for its greed by a god of plenty or generosity. Perhaps one of your forebears was marked by the hungering undead. Sorcerers with this origin have an unyielding appetite for arcana and go to nearly any length to satiate their desire to increase their magical power.",
                bkd_name = "Destined",
                bkd_desc = "Duty is a complicated, tangled affair, be it filial, political, or civil. Sometimes, there's wealth and intrigue involved, but more often than not, there's also obligation and responsibility. You are a person with just such a responsibility. This could involve a noble title, an arranged marriage, a family business you're expected to administer, or an inherited civil office. You promised to fulfill this responsibility, you are desperately trying to avoid this duty, or you might even be seeking the person intended to be at your side. Regardless of the reason, you're on the road, heading toward or away from your destiny.",
            ),
            Character(
                race_name = "Half-Orc",
                cls_name = "Barbarian",
                arch_name = "Path of Hellfire",
                arch_desc = "Devils have long been known to grant power to mortals as part of a pact or bargain. While this may take the form of unique magic or boons, those who follow the Path of Hellfire are gifted with command over the fires of the Lower Planes, which they channel for short periods to become powerful and furious fighting machines. While some of these barbarians are enlisted to support the devils' interests as soldiers or enforcers, some escape their devilish fates, while others still are released after their term of service.",
                bkd_name = "Outlander",
                bkd_desc = "You lived far from the farms and fields of civilization. You know the beauties and the dangers of the wilderness. Were you part of a nomadic tribe? A hunter or guide? A lone wanderer or explorer? A guardian of civilization against monsters, or of the old ways against civilization?",
            ),
            Character(
                race_name = "Erina",
                cls_name = "Monk",
                arch_name = "Way of the Unerring Arrow",
                arch_desc = "The inner peace of contemplation, the artistry of focused breathing, and the calm awareness which leads to pinpoint accuracy all contribute to the Way of the Unerring Arrow. Some are dedicated soldiers, others walk the path of a wandering warrior-mendicant, but all of them hone their art of self-control, spirituality, and the martial arts, combining unarmed combat with archery. Select this tradition if you want to play a character who is as comfortable trading kicks and blows as they are with snatching an arrow from the air and firing it back in a single motion.",
                bkd_name = "Parfumier",
                bkd_desc = "You are educated and ambitious. You spent your youth apprenticed among a city's more reputable greenhouses, laboratories, and perfumeries. There, you studied botany and chemistry and explored properties and interactions with fine crystal, rare metals, and magic. You quickly mastered the skills to identify and process rare and complex botanical and alchemical samples and the proper extractions and infusions of essential oils, pollens, and other fragrant chemical compounds—natural or otherwise. Not all (dramatic) changes to one's lifestyle, calling, or ambitions are a result of social or financial decline. Some are simply decided upon. Regardless of your motivation or incentive for change, you have accepted that a comfortable life of research, science and business is—at least for now—a part of your past.",
            ),
            Character(
                race_name = "Gnome",
                cls_name = "Cleric",
                arch_name = "Blood Domain",
                arch_desc = "The Blood domain centers around the understanding of the natural life force within one’s own physical body. The power of blood is the power of sacrifice, the balance of life and death, and the spirit’s anchor within the mortal shell. The Gods of Blood seek to tap into the connection between body and soul through divine means, exploit the hidden reserves of will within one’s own vitality, and even manipulate or corrupt the body of others through these secret rites of crimson. Almost any neutral or evil deity can claim some influence over the secrets of blood magic and this domain, while the gods who watch from more moral realms shun its use beyond extenuating circumstance./n When casting divine spells as a Blood Domain cleric, consider ways to occasionally flavor your descriptions to tailor the magic’s effect on the opponent’s blood and vitality. Hold person might involve locking a target’s body into place from the blood stream out, preventing them from moving. Cure wounds may feature the controlling of blood like a needle and thread to close lacerations. Guardian of faith could be a floating, crimson spirit of dripping viscera who watches the vicinity with burning red eyes. Have fun with the themes!",
                bkd_name = "Folk Hero",
                bkd_desc = "You were born to a commoner family, but some event earned you fame. You're admired locally, and tales of your deeds have reached the far corners of the world. Did you win your fame by battling an oppressive tyrant? Saving your village from a monster? Or by something more prosaic like winning a wrestling bout or a pie-eating contest?",
            ),
            Character(
                race_name = "Gearforged",
                cls_name = "Bard",
                arch_name = "College of Echoes",
                arch_desc = "In the caverns beneath the surface of the world, sound works differently. Your exposure to echoes has taught you about how sound changes as it moves and encounters obstacles. Inspired by the effect caves and tunnels have on sounds, you have learned to manipulate sound with your magic, curving it and altering it as it moves. You can silence the most violent explosions, you can make whispers seem to reverberate forever, and you can even change the sounds of music and words as they are created.",
                bkd_name = "Freebooter",
                bkd_desc = "You sailed the seas as a freebooter, part of a pirate crew. You should come up with a name for your former ship and its captain, as well as its hunting ground and the type of ships you preyed on. Did you sail under the flag of a bloodthirsty captain, raiding coastal communities and putting everyone to the sword? Or were you part of a group of former slaves turned pirates, who battle to end the vile slave trade? Whatever ship you sailed on, you feel at home on board a seafaring vessel, and you have difficulty adjusting to long periods on dry land.",
            )
        ]

        db.session.add_all(new_chars)
        db.session.commit()
        print("seeded characters")