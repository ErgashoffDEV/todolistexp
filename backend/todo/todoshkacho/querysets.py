from django.db.models import QuerySet


class TodoQuerySet(QuerySet):
    def list(self, type):
        query = self.filter(completed=True) if type == 'completed' else self
        query = query.filter(completed=False) if type == 'open' else query

        return query.order_by('-id')
