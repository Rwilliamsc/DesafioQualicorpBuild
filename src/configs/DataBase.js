
import neo4j from 'neo4j-driver'

export const DATA_BASE = neo4j.driver('bolt://204.236.241.53:32903', neo4j.auth.basic('neo4j', 'dividers-radiators-emitters'))
