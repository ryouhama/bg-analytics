package hero

type Hero struct {
	id int
	name string
}

func NewHero(id int, name string) (*Hero, error) {
	return &Hero{
		id: id,
		name: name,
	}, nil
}

func (hero *Hero) Id() int {
	return hero.id
}

func (hero *Hero) Name() string {
	return hero.name
}
