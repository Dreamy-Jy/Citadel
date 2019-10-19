from alembic import op
from sqlalchemy import Column, String

#stored in alembic for file storage purposes but belongs in one directory above

def upgrade():
	op.add_column('ModelService', Column('user_name', String()))
	op.execute("""UPDATA ModelService Set is_active = 'f' """)
if __name__ == '__main__':
	upgrade()